import ambilight, { led, ambient } from "../src";

const file = name => `video/${ name }`;
const contentList = [
    { file: file("aurora.mp4"), title: "Aurora 2013", author: "Christian Mülhauser", homepage: "http://chrigu.org" },
    { file: file("dartmoor.mp4"), title: "Dartmoor", author: "James Watson", homepage: "http://www.james-watson.net" },
    { file: file("the-peak.mp4"), title: "The Peak", author: "Christian Mülhauser", homepage: "http://chrigu.org" }
];

const match = window.location.search.match(/_=(\d+)/);
const contentIdx = match ? parseInt(match[1], 10) : 0;
const content = contentList[contentIdx] || contentList[0];

const $video = document.querySelector("video");
const $title = document.querySelector(".copyright .title");
const $a = document.querySelector(".copyright a");

$video.src = content.file;
$title.innerHTML = content.title;
$a.href = content.homepage;
$a.innerHTML = content.author;

ambilight($video, led());