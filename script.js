//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
funtion loadurl(url){
	return new Promise((res,rej)=>{
		fetch(url)
		.then(response=>{
			if(!response.ok){
				throw new Error()
			}
			return response.blob();
		})
		.then(blob=>{
			let img=URL.createObjectURL(blob);
			res(img);
		})
		.catch(e=>{
			rej(`Failed to load image's URL: ${url}`);
		})
	})
}
function download(){
	let imagePro=images.map(image=>loadurl(image.url));
	Promise.all(imagePro)
	.then(img=>{
		img.forEach(img=>{
			let imageElement=document.createElement("img");
			imageElement.src=img;
		output.appendChild(imageElement);
		})
	})
	.catch(e=>{
		console.log(e)
	})
}
btn.addEventListener("click",download);