import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface SetCategoryModalProps {
  onClose: () => void;
  onSet: (index: number) => void;
  categories: [categoryValues];
}
export function SetCategoryModal({
  onClose,
  categories,
  onSet,
}: SetCategoryModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ index: number }>();
  const onSubmit: SubmitHandler<{ index: number }> = (data) => {
    onSet(data.index);
    onClose();
  };

  return (
    <>
      <div className="modal">
        <span className="modal_title">Set a default category.</span>
        <form className="modal_form" onSubmit={handleSubmit(onSubmit)}>
          <select
            {...register("index")}
            className="modal_select"
            style={{ width: "45%" }}
          >
            {categories.map((category, i) => (
              <option key={i} value={i}>
                {category.name}
              </option>
            ))}
          </select>
          <div className="modal_row">
            <button className="modal_cancel" type="reset" onClick={onClose}>
              Cancel
            </button>
            <button className="modal_submit" type="submit">
              Set
            </button>
          </div>
        </form>
      </div>
      <div className="modal_blur" />
    </>
  );
}
