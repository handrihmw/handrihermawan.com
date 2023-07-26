// remember to fix this issue wint the tailwind/nuxt
// https://github.com/tailwindlabs/tailwindcss-intellisense/issues/663#issuecomment-1316788128

module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        outfitExtraLight: ['Outfit ExtraLight', 'sans-serif'],
        outfitLight: ['Outfit Light', 'sans-serif'],
        outfitThin: ['Outfit Thin', 'sans-serif'],
        outfitMedium: ['Outfit Medium', 'sans-serif'],
        outfitSemiBold: ['Outfit SemiBold', 'sans-serif'],
        outfitBold: ['Outfit Bold', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
