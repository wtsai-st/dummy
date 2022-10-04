import { forwardRef } from 'react';

export const DummyTemplate = forwardRef<HTMLDivElement>((_0, ref) => {
    return <div ref={ref} dangerouslySetInnerHTML={{ __html: require('./legacy-html/dummy.html') }} />;
});
