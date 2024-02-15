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

export const handleImagesChange = (
  event: ChangeEvent<HTMLInputElement>,
  prevFiles: Blob[] | null,
  func: (file: Blob[]) => void,
) => {
  console.log(prevFiles);

  const files = event.target.files;
  if (files) {
    const file = files[0];
    const extension = file.name.split('.').pop()?.toLowerCase();

    const allowedExtensions = ['png', 'jpg', 'jpeg', 'gif', 'pdf', 'tiff', 'psd', 'bmp'];

    if (extension && allowedExtensions.includes(extension)) {
      if (prevFiles === null) {
        func([file]);
      } else {
        func([...prevFiles, file]);
      }
    } else {
      toast.error('허용되지 않은 파일 형식입니다.');
    }
  }
};
