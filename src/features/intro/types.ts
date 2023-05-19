export type TreeResponse = {
    arguson: {
        children: Array<TreeChild>;
    };
};

export type TreeChild = {
    node_id: string;
    taxon: {
        name: string;
        unique_name: string;
        ott_id: number;
    }
};

export type TreeRequest = {
    ott_id: number;
    height_limit?: number;
    format?: 'arguson' | 'newick'
};

export type ElementalData = {
    name: string;
    details: string;
    img: string;
    ottId: number;
};
