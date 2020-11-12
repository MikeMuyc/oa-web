module.exports = {
    presets: [
        "@vue/cli-plugin-babel/preset"
    ],
    "plugins": [
        
        [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ],
        [
            "import",
            {
                libraryName: "@suc/ui",
                libraryDirectory: "components"
            },
            "@suc/ui"
        ]
    ],
    sourceType: 'unambiguous'
}
