export default defineNuxtRouteMiddleware((to, from) => {
    const isAuthenticated = true;

    const hasSecretAccess = to.query.key === "123";

    if(hasSecretAccess){
        return;
    }

    if (!isAuthenticated){
        return abortNavigation("NOT ALLOWED");
    }
});