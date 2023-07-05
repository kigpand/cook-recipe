export async function uploadImg(file: File) {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", process.env.REACT_APP_CLOUD_PRESET!);
  return fetch(process.env.REACT_APP_CLOUD_URL!, {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((data) => data.url);
}
