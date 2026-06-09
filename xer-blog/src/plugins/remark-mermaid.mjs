import { visit } from 'unist-util-visit';

// Converts ```mermaid code fences into raw `<pre class="mermaid">` HTML nodes
// before Expressive Code processes code blocks, so diagram sources reach the
// browser as plain text for client-side rendering (see MarkdownContent.astro).
export default function remarkMermaid() {
	return (tree) => {
		visit(tree, 'code', (node, index, parent) => {
			if (node.lang !== 'mermaid' || !parent || index === undefined) return;
			const source = node.value
				.replaceAll('&', '&amp;')
				.replaceAll('<', '&lt;')
				.replaceAll('>', '&gt;');
			parent.children[index] = {
				type: 'html',
				value: `<pre class="mermaid">${source}</pre>`,
			};
		});
	};
}
