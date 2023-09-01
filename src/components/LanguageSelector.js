import React, { useState } from "react";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    // Thực hiện các hành động khác khi người dùng thay đổi ngôn ngữ
  };

  return (
    <div>
      <label>Chọn ngôn ngữ: </label>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="vi">Tiếng Việt</option>
        {/* Thêm các ngôn ngữ khác */}
      </select>
    </div>
  );
};

export default LanguageSelector;
