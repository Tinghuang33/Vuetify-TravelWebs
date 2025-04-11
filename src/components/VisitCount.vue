<template>
  <!-- 瀏覽人次 -->
  <div>
    <h1>Current Page Views: {{ pageViews }}</h1>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { getDatabase, ref as dbRef, onValue, runTransaction } from 'firebase/database'

export default {
  name: 'PageViewCounter',
  setup() {
    // 使用 Vue 3 的 Composition API，設置當前頁面瀏覽數和頁面名稱
    const pageViews = ref(0)
    const currentPage = ref(window.location.pathname.slice(1))

    // 加載頁面瀏覽數據
    const loadPageViews = () => {
      const db = getDatabase()
      const pageRef = dbRef(db, `page_views/${currentPage.value}`) 

      // 註冊 Firebase 上的數據監聽，當資料變動時觸發
      onValue(
        pageRef,
        (snapshot) => {
          const data = snapshot.val()
          console.log("Current Page Views (loaded):", data) // 確認讀取的資料
          // 如果是嵌套對象，取出內部數值
          if (typeof data === "object" && data !== null) {
            pageViews.value = Number(data.value) || 0
          } else {
            pageViews.value = Number(data) || 0 
          }
        },
        (error) => {
          console.error("Error reading data:", error)
        }
      )
    }

    // 更新瀏覽人次到 Firebase
    const updatePageViews = () => {
      const db = getDatabase()
      const pageRef = dbRef(db, `page_views/${currentPage.value}`) 
      runTransaction(pageRef, (currentViews) => {
        if (currentViews === null || typeof currentViews !== "object") {
          return { value: 1 } // 初始化嵌套對象
        }
        return { value: (currentViews.value || 0) + 1 } // 遞增數字
      })
        .then(() => {
          console.log("Page Views updated successfully")
        })
        .catch((error) => {
          console.error("Error updating data:", error)
        })
    }

    onMounted(() => {
      // 先加載頁面數據，再更新
      loadPageViews()
      setTimeout(() => {
        updatePageViews()
      }, 500)
    })

    return {
      pageViews
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 2em;
  color: #023047;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
}
</style>
