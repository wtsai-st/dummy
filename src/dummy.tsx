import { forwardRef } from 'react';

const innerHtml = require('./legacy-html/dummy.html');

export const DummyTemplate = forwardRef<HTMLDivElement>((_0, ref) => {
    return <div ref={ref} dangerouslySetInnerHTML={{ __html: innerHtml }} />;
});
