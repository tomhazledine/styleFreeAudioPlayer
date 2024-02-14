import { getFileType, getFileName } from "../utils/helpers";

// Return an array of all the <audio> elements found on the page.
export const findAudio = context => {
    // Get all the <audio> occurrences in the page.
    let audioElements = context.getElementsByTagName("audio");
    // Save our audioElements as an array (so we can manipulate the DOM but
    // still access our items).
    let items = [].slice.call(audioElements);
    return items;
};

// Build an array of classes to add to each new "player" element
export const prepareClasses = (index, classes, theme) => {
    const classesString = `picobel loading picobel--index-${index} ${classes}`;
    const classesArray = classesString.trim().split(" ");
    return [...classesArray, theme];
};

// Get the url for each audio file we want to load [using elements found by findAudio()]
export const getRawData = nodes =>
    nodes.map((node, key) => {
        node.key = key;
        node.mute = false;
        node.tmpVolume = 1;
        return node;
    });

// Get info about the audio track
export const getMeta = item => {
    let meta = {};
    // Get the filename and type
    meta.url = item.currentSrc;
    meta.fileType = getFileType(meta.url);
    meta.fileName = getFileName(meta.url);
    // If there is a valid title, get that title, otherwise get the file name.
    meta.title =
        item.title && item.title !== ""
            ? item.title
            : `${meta.fileName}.${meta.fileType}`;
    // If there is a valid 'artist', get the artist name.
    if (item.dataset) {
        meta.artist = item.dataset.artist ? item.dataset.artist : false;
    } else {
        meta.artist = false;
    }
    return meta;
};
