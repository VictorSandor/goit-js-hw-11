const params = {
  key: '45016563-185536351b7165172c03d7cff',
  q: '',
  imageType: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export function generateHttpsQuery(formValue) {
  params.q = formValue;
  const queryString = new URLSearchParams(params).toString();
  return `https://pixabay.com/api/?${queryString}`;
}

export function fetchPictures(httpsQuery) {
  return fetch(httpsQuery).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
