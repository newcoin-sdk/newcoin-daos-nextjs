import { useRouter } from 'next/router';
import DefaultErrorPage from 'next/error';
import React from 'react';
import { BuilderComponent, builder, useIsPreviewing, Builder } from '@builder.io/react';
import dynamic from 'next/dynamic'

const builderKey = process.env.NEXT_PUBLIC_BUILDER_KEY;
builder.init( builderKey );

export async function getStaticProps({ params }) {
    // Fetch the first page from Builder that matches the current URL.
    // Use the `userAttributes` field for targeting content.
    // For more, see https://www.builder.io/c/docs/targeting-with-builder
    const page = await builder
        .get('page', {
            userAttributes: {
                urlPath: '/' + (params?.page?.join('/') || ''),
            },
        })
        .toPromise();

    return {
        props: {
            page: page || null,
        },
        revalidate: 5,
    };
}

export async function getStaticPaths() {
    //  Fetch all published pages for the current model.
    //  Using the `fields` option will limit the size of the response
    //  and only return the `data.url` field from the matching pages.
    const pages = await builder.getAll('page', {
        fields: 'data.url', // only request the `data.url` field
        options: { noTargeting: true },
        limit: 0,
    });

    return {
        paths: pages.map(page => `${page.data?.url}`),
        fallback: true,
    };
}

export default function Page({ page, children }) {
    const router = useRouter();
    //  This flag indicates if you are viewing the page in the Builder editor.
    const isPreviewing = useIsPreviewing();

    if (router.isFallback) {
        return <h1>Loading...</h1>;
    }

    //  Add your error page here to return if there are no matching
    //  content entries published in Builder.
    if (!page && !isPreviewing) {
        return <DefaultErrorPage statusCode={404} />;
    }

    return (
        <body>
            { children }
            <BuilderComponent model="page" content={page} />
        </body>
    );
}

const DaoMenu = dynamic(() => import('../components/daos/common/DaoMenu'), {
    loading: () => <p>Loading...</p>,
})

const ProposalsMenu = dynamic(() => import('../components/daos/proposals/common/menus/ProposalsMenu'), {
    loading: () => <p>Loading...</p>,
})

const StandardList = dynamic(() => import('../components/daos/proposals/standard/lists/StandardList'), {
    loading: () => <p>Loading...</p>,
})

//  This is a minimal example of a custom component, you can view more complex input extendable-types here:
//  https://www.builder.io/c/docs/custom-react-components#input-types

Builder.registerComponent(DaoMenu, {
    // dynamic: true,
    name: 'DaoMenu',
    inputs: []
});

Builder.registerComponent(ProposalsMenu, {
    name: 'ProposalsMenu',
    inputs: []
});

Builder.registerComponent(StandardList, {
    name: 'StandardList',
    inputs: []
});

// Register a custom insert menu to organize your custom components
// https://www.builder.io/c/docs/custom-components-visual-editor#:~:text=than%20this%20screenshot.-,organizing%20your%20components%20in%20custom%20sections,-You%20can%20create
Builder.register('insertMenu', {
    name: 'Dao',
    dynamic: true,
    items: [
        { item: 'DaoMenu', name: 'Dao Menu' },
    ],
});

Builder.register('insertMenu', {
    name: 'Proposals',
    dynamic: true,
    items: [
        { item: 'ProposalsMenu', name: 'Proposals Menu' },
        { item: 'StandardList', name: 'Proposals List' },
    ],
});