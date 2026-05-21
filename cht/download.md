---
aside: false
---
<script setup>
import { ref, onMounted } from 'vue'

const version = ref('')
const releaseDate = ref('')

onMounted(async () => {
  try {
    const res = await fetch('/metadata/updates.json')
    const data = await res.json()
    version.value = data.latest_version
    releaseDate.value = new Date(data.release_date).toLocaleDateString('zh-TW')
  } catch {}
})
</script>

# 下載 ZALP

<div class="version-info">
  <div class="version-text">
    <p class="current-version">目前版本：<strong>{{ version || '載入中...' }}</strong></p>
    <p class="release-date" v-if="releaseDate">發佈日期：{{ releaseDate }}</p>
  </div>
  <button class="download-btn">下載最新版本</button>
</div>

## 系統需求

- 作業系統：Windows 10/11 64位
- 無需額外依賴

<style>
.version-info {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  margin: 1rem 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
}
.version-text {
  flex-shrink: 0;
}
.current-version {
  font-size: 1.2rem;
  margin: 0;
}
.current-version strong {
  color: var(--vp-c-brand-1);
  font-size: 1.4rem;
}
.release-date {
  margin: 0.5rem 0 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}
.download-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 2rem;
  background: var(--vp-c-brand-1);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;
}
.download-btn:hover {
  background: var(--vp-c-brand-2);
  color: #fff;
}
</style>
