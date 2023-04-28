import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { categoryValues } from "../../../shared/type";

const todayDate = new Date();

interface AddModalProps {
  onClose: () => void;
  addCategories: (task: categoryValues) => void;
}

export function AddModal({ onClose, addCategories }: AddModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<categoryValues>();
  const onSubmit: SubmitHandler<categoryValues> = (data) => {
    data.isDefault = false;
    addCategories(data);
    onClose();
  };

  return (
    <>
      <div className="modal">
        <span className="modal_title">Create a category.</span>
        <form className="modal_form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", {
              required: true,
              maxLength: 20,
              minLength: 3,
            })}
            aria-invalid={errors.name ? "true" : "false"}
            className="modal_input"
            type="text"
            placeholder="Category name"
          />
          {errors.name?.type === "required" && (
            <span className="modal_error">Category name is required.</span>
          )}
          {errors.name?.type === "minLength" && (
            <span className="modal_error">
              Category name should have minimum 3 characters
            </span>
          )}
          {errors.name?.type === "maxLength" && (
            <span className="modal_error">
              Category name is too long! (max 20 chars)
            </span>
          )}
          <div className="modal_row">
            <button className="modal_cancel" type="reset" onClick={onClose}>
              Cancel
            </button>
            <button className="modal_submit" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
      <div className="modal_blur" />
    </>
  );
}
