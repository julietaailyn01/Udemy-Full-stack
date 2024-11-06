import { defineConfig } from "orval";

export default defineConfig({
    "schoolUdemy": {
        input: "http://localhost:5062/swagger/v1/swagger.json",
        output: {
            mode: "split",
            workspace: "src/generated-sources/api/",
            target: "./schoolUdemy.ts",
            schemas: "./model",
            prettier: true,
            client: "react-query",
            override: {
                mutator: {
                    path: './useCustomInstance.ts',
                    name: 'useCustomInstance',
                },
            },
        }
    },
});