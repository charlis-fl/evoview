export type TreeResponse = {
    name?: string;
    link: string;
};

export type TreeRequest = {
    ott_id: number;
    height_limit?: number;
    format?: 'arguson' | 'newick'
};
