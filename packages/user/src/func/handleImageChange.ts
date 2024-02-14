import { ChangeEvent } from 'react';
import { toast } from 'react-toastify';

export const handleImageChange = (event: ChangeEvent<HTMLInputElement>, func: (file: Blob) => void) => {
  const files = event.target.files;
  if (files) {
    const file = files[0];
    const extension = file.name.split('.').pop()?.toLowerCase();

    const allowedExtensions = ['png', 'jpg', 'jpeg', 'gif', 'pdf', 'tiff', 'psd', 'bmp'];

    if (extension && allowedExtensions.includes(extension)) {
      func(file);
    } else {
      toast.error('허용되지 않은 파일 형식입니다.');
    }
  }
};

// 이건 사진 여러개일때
// if (files) {
//   const validatedFiles = Array.from(files).filter((file) => {
//     const extension = file.name.split('.').pop()?.toLowerCase();
//     const allowedExtensions = ['png', 'jpg', 'jpeg', 'gif', 'pdf', 'tiff', 'psd', 'bmp'];
//     return extension && allowedExtensions.includes(extension);
//   });

//   if (validatedFiles.length !== files.length) {
//     toast.error('하나 이상의 파일이 허용되지 않은 형식입니다.');
//   } else {
//     setProjectImage(validatedFiles);
//   }
// }
