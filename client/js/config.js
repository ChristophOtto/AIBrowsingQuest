define([], function () {
    return {
        dev: { host: window.location.hostname, port: 8000, dispatcher: false },
        build: { host: window.location.hostname, port: 8000, dispatcher: false }
    };
});
