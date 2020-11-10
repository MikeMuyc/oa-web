module.exports = {
    presets: [
        "@vue/cli-plugin-babel/preset"
    ],
    "plugins": [
        [
            "import",
            {
                "libraryName": "view-design",
                "libraryDirectory": "src/components"
            },
            "view-design"
        ],
        [
            "import",
            {
                "libraryName": "iview",
                "libraryDirectory": "src/components"
            },
            "iview"
        ],
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
