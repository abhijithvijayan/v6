export default function importAll(context) {
    return context
        .keys()
        .map(context)
        .map(module => {
            return module.default;
        });
}
