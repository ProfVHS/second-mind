import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const todayDate = new Date();

interface EditModalProps {
  onClose: () => void;
  onEdit: (task: taskValues) => void;
  task: taskValues;
  categories: [categoryValues];
}

export function EditModal({
  onClose,
  task,
  onEdit,
  categories,
}: EditModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<taskValues>();
  const onSubmit: SubmitHandler<taskValues> = (data) => {
    data.progress = task.progress;
    onEdit(data);
    onClose();
  };

  return (
    <>
      <div className="modal">
        <span className="modal_title">Edit a new task.</span>
        <form className="modal_form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("taskname", {
              required: true,
              maxLength: 20,
              minLength: 3,
            })}
            aria-invalid={errors.taskname ? "true" : "false"}
            className="modal_input"
            type="text"
            placeholder="Task name"
            defaultValue={task.taskname}
          />
          {errors.taskname?.type === "required" && (
            <span className="modal_error">Task name is required.</span>
          )}
          {errors.taskname?.type === "minLength" && (
            <span className="modal_error">
              Task name should have minimum 3 characters
            </span>
          )}
          {errors.taskname?.type === "maxLength" && (
            <span className="modal_error">
              Task name is too long! (max 20 chars)
            </span>
          )}
          <input
            className="modal_input"
            type="text"
            placeholder="Short description"
            {...register("desc", { maxLength: 32 })}
            aria-invalid={errors.desc ? "true" : "false"}
            defaultValue={task.desc}
          />
          {errors.desc?.type === "maxLength" && (
            <span className="modal_error">
              Task description must be short! (max 32 chars){" "}
            </span>
          )}
          <div className="modal_row">
            <select
              {...register("priority")}
              className="modal_select"
              style={{ width: "45%" }}
              defaultValue={task.priority}
            >
              <option value={"LOW"}>Low</option>
              <option value={"MEDIUM"}>Medium</option>
              <option value={"HIGH"}>High</option>
            </select>
            <select
              {...register("category")}
              className="modal_select"
              style={{ width: "45%" }}
              defaultValue={task.category}
            >
              {categories.map((item, i) => (
                <option key={i} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="modal_row">
            <input
              {...register("date")}
              style={{ width: "75%" }}
              type="date"
              defaultValue={task.date}
            />
            <input
              {...register("time")}
              style={{ width: "25%" }}
              type="time"
              defaultValue={task.time}
            />
          </div>
          <div className="modal_row">
            <button className="modal_cancel" type="reset" onClick={onClose}>
              Cancel
            </button>
            <button className="modal_submit" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
      <div className="modal_blur" />
    </>
  );
}
