import { isNoUnitNumericStyleProp } from "@vue/shared";

export default defineNuxtPlugin(()=> {
    return {
        provide: {
            listify: (input: string) => {
                return input.split(",").map((a) => a.trim());
            },
        },
    };
});