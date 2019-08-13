import marked from 'marked';

export const withParsedHtml = data => {
    return { ...data, html: marked(data.body) };
};

export const withNoBody = data => {
    return { ...data, body: undefined };
};

export const trimQuotes = str => {
    return str.replace(/^"(.*)"$/, '$1');
};
