
export const formatPhoneNumber = (phoneNumber) => {
    // Xóa tất cả ký tự không phải số khỏi chuỗi số điện thoại
    const cleaned = phoneNumber.replace(/\D/g, '');
  
    // Định dạng số điện thoại thành dạng (123) 456-7890
    const formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    
    return formatted;
  };
  
  export const formatPopulation = (population) => {
    // Định dạng dân số với dấu phân cách hàng nghìn
    return population.toLocaleString();
  };

  export const formatArea = (area) => {
    if (area.unit === "km²") {
      const value = area.value;
      if (value >= 1000000) {
        // Định dạng thành triệu km² nếu diện tích lớn hơn hoặc bằng 1 triệu km²
        return `${(value / 1000000).toFixed(2)} triệu km²`;
      } else if (value >= 1000) {
        // Định dạng thành nghìn km² nếu diện tích lớn hơn hoặc bằng 1 nghìn km²
        return `${(value / 1000).toFixed(2)} nghìn km²`;
      } else {
        // Định dạng mặc định nếu diện tích nhỏ hơn 1 nghìn km²
        return `${value} km²`;
      }
    } else {
      // Định dạng mặc định nếu không rõ đơn vị
      return area.value.toLocaleString();
    }
  }

  export const formatByUnit = (population) => {
  if (population >= 1000000000) {
    // Định dạng thành tỷ dân số nếu lớn hơn hoặc bằng 1 tỷ
    return `${(population / 1000000000).toFixed(2)} tỷ`;
  } else if (population >= 1000000) {
    // Định dạng thành triệu dân số nếu lớn hơn hoặc bằng 1 triệu
    return `${(population / 1000000).toFixed(2)} triệu`;
  } else if (population >= 1000) {
    // Định dạng thành nghìn dân số nếu lớn hơn hoặc bằng 1 nghìn
    return `${(population / 1000).toFixed(2)} nghìn`;
  } else {
    // Giữ nguyên dân số nếu nhỏ hơn 1 nghìn
    return population.toString();
  }
};

export async function translateToVietnamese(text) {
  try {
    const response = await fetch(
      'https://api.mymemory.translated.net/get',
      {
        method: 'POST',
        body: JSON.stringify({
          q: text,
          langpair: 'en|vi', // Từ tiếng Anh sang tiếng Việt
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      return data.responseData.translatedText;
    } else {
      console.error('Không thể dịch dữ liệu.');
    }
  } catch (error) {
    console.error('Lỗi:', error);
  }
}