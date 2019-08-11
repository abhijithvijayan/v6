import fm from 'tiny-frontmatter';

export default function frontMatter(content = '') {
    return fm(content);
}
