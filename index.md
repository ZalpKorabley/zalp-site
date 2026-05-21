---
layout: false
---
<script setup>
if (typeof window !== 'undefined') {
  const preferredLangs = navigator.languages
    ? navigator.languages.join(',').toLowerCase()
    : (navigator.language || navigator.userLanguage).toLowerCase()
  if (['zh-tw', 'zh-hk', 'zh-mo', 'zh-hant'].some(lang => preferredLangs.includes(lang))) {
    window.location.href = '/cht/'
  } else if (['ru', 'be', 'kk', 'ky', 'uz'].some(lang => preferredLangs.includes(lang))) {
    window.location.href = '/ru/'
  } else if (preferredLangs.includes('ja')) {
    window.location.href = '/ja/'
  } else if (preferredLangs.includes('zh')) {
    window.location.href = '/chs/'
  } else {
    window.location.href = '/en/'
  }
}
</script>
<div style="text-align: center; margin-top: 100px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <p style="color: var(--vp-c-text-1); font-size: 1.2rem;">Redirecting to your preferred language...</p>
  <p style="color: var(--vp-c-text-2); font-size: 1.2rem;">Перенаправляем на вашу языковую версию...</p>
  <p style="color: var(--vp-c-text-1); font-size: 1.2rem;">正在跳转至您的语言版本 · 正在跳轉至您的語言版本 · 言語設定を確認中...</p>
</div>
