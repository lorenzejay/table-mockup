const foldersSection = document.getElementById("folders-section");
const tableBody = document.getElementById("tbody");
const preview = document.getElementById("preview");
const folders = [
  { id: 1, name: "folder 1", children: ["child 1", "child 2"] },
  { id: 2, name: "folder 2", children: ["child 1"] },
  { id: 3, name: "folder 3", children: ["child 1", "child 2", "child 3"] },
];
const tableData = [
  { id: 1, file: "folder 1", size: "2mb", date: "12/2/22" },
  { id: 2, file: "folder 2", size: "3mb", date: "12/2/22" },
  { id: 3, file: "folder 3", size: "3mb", date: "12/2/22" },
];

foldersSection.innerHTML = folders
  .map(
    (folder) =>
      `
      <div class='flex items-center relative' >
        <input  type='checkbox' id='toggle-${folder.id}' class='peer hidden' />
        <label for='toggle-${
          folder.id
        }' class=' items-center w-full flex peer-checked:hidden cursor-pointer text-xl'>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-folder" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"></path>
          </svg>
          <p class='text-xl ml-4'>
            ${folder.name}
          </p>
        </label>
        
        <label for='toggle-${
          folder.id
        }' class='items-center w-full hidden peer-checked:flex cursor-pointer text-xl mb-12'>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-folder" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"></path>
          </svg>
          <p class='text-xl ml-4'>
            ${folder.name}
          </p>
        </label>
        
        <div class='peer-checked:flex flex-col hidden absolute -bottom-4 inset-x-0 pl-14'>
          ${folder.children
            .map((child) => {
              console.log("child", child);
              return `<div class='hover:underline cursor-pointer'>${child}</div>`;
            })
            .join("")}
        </div>
      </div>
    `
  )
  .join("");

tableBody.innerHTML = tableData
  .map(
    (data, i) => `
  <tr class="cursor-pointer tdata" id='${data.id}'>
  <th>${i + 1}</th>
  <td>${data.file}</td>
  <td>${data.size}</td>
  <td>${data.date}</td>
</tr>
  `
  )
  .join("");

//default
preview.innerHTML = `
 <div class='flex flex-col text-lg'>
        <div class='max-w-[300px]'>
          <img src='./asset.jpg' />
        </div>
        <div>Name: ${tableData[0].file}</div>
        <div>File size: ${tableData[0].size}</div>
        <div>meta: something</div>
        <div>meta: something</div>

      </div>
`;

// event delegated onclick
tableBody.addEventListener("click", (e) => {
  const tData = e.target.parentNode;
  // console.log("tData", tData.getAttribute("id"));
  const previewData = tableData.find(
    (data) => data.id == tData.getAttribute("id")
  );
  preview.innerHTML = `
   <div class='flex flex-col text-lg'>
        <div class='max-w-[300px]'>
          <img src='./asset.jpg' />
        </div>
        <div>Name: ${previewData.file}</div>
        <div>File size: ${previewData.file}</div>
        <div>meta: something</div>
        <div>meta: something</div>
      
      </div>
  `;
});
