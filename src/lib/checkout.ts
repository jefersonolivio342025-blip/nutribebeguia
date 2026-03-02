const KIWIFY_URL = "https://pay.kiwify.com.br/vrYjxFv";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "src"];

export function openCheckout() {
  const url = new URL(KIWIFY_URL);
  UTM_KEYS.forEach((key) => {
    const val = sessionStorage.getItem(`nb_${key}`) || localStorage.getItem(`nb_${key}`);
    if (val) {
      url.searchParams.set(key, val);
    }
  });
  window.open(url.toString(), "_blank");
}
