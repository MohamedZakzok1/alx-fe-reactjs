import { useState } from "react";

const AddRecipeForm = ({ addRecipe }) => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});

  // دالة التحقق من صحة المدخلات
  const validate = () => {
    let validationErrors = {};

    if (!formData.title.trim()) {
      validationErrors.title = "يجب إدخال عنوان الوصفة!";
    }

    if (!formData.ingredients.trim()) {
      validationErrors.ingredients = "يجب إدخال المكونات!";
    } else if (formData.ingredients.split(",").length < 2) {
      validationErrors.ingredients = "يجب إدخال مكونين على الأقل، مفصولين بفاصلة.";
    }

    if (!formData.steps.trim()) {
      validationErrors.steps = "يجب إدخال خطوات التحضير!";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // تحديث البيانات عند تغيير أي حقل
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // معالجة الإرسال
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    // إضافة الوصفة
    addRecipe({
      title: formData.title,
      ingredients: formData.ingredients.split(","),
      steps: formData.steps,
    });

    // إعادة تعيين الحقول
    setFormData({
      title: "",
      ingredients: "",
      steps: "",
    });

    setErrors({});
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold text-center mb-4">إضافة وصفة جديدة</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* حقل عنوان الوصفة */}
        <input
          type="text"
          name="title"
          placeholder="عنوان الوصفة"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

        {/* حقل المكونات */}
        <textarea
          name="ingredients"
          placeholder="المكونات (افصل بين كل مكون بفاصلة)"
          value={formData.ingredients}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}

        {/* حقل خطوات التحضير */}
        <textarea
          name="steps"
          placeholder="خطوات التحضير"
          value={formData.steps}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}

        {/* زر الإرسال */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          إضافة الوصفة
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
