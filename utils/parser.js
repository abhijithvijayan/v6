import marked from 'marked';

export const withParsedHtml = data => {
    // console.log(data.attributes);
    return { ...data, html: marked(data.body) };
};

export const withNoBody = data => {
    return { ...data, body: undefined };
};

export const trimQuotes = str => {
    return str.replace(/^"(.*)"$/, '$1');
};

// Remove double quotes of keys from start and end
export const trimKeys = data => {
    const { attributes } = data;
    const newObj = Object.assign(
        {},
        ...Object.keys(attributes).map(k => {
            // Skip arrays and objects
            if (typeof attributes[k] !== 'object') {
                return { [k]: attributes[k].replace(/^"(.*)"$/, '$1') };
            }
            return { [k]: attributes[k] };
        })
    );
    return { ...data, attributes: newObj };
};
