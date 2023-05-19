/* eslint-disable @typescript-eslint/naming-convention */

const REACT_APP_API_URL = 'https://api.opentreeoflife.org';

export const apiRootUrl = `${REACT_APP_API_URL}/v3`;

// TREE OF LIFE ENDPOINTS
export const treeInfo = '/tree_of_life/subtree';
export const wikiGetDetails = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts%7Cpageimages&titles=%search%&redirects=true&pithumbsize=600';
