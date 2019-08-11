import marked from 'marked';

export function withParsedHtml(data) {
    return { ...data, html: marked(data.body) };
}

export function withNoBody(data) {
    return { ...data, body: undefined };
}
