import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const todayDate = new Date();

type FormValues = {
  taskname: string;
  desc: string;
  priority: priorityType;
  category: string;
  date: string;
  time: string;
};

interface AddTaskWindowProps {
  onClose: () => void;
}

function AddTaskWindow({ onClose }: AddTaskWindowProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <>
      <div className="modal">
        <span className="modal_title">Create a new task.</span>
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
            >
              <option value={"LOW"}>Low</option>
              <option value={"MEDIUM"}>Medium</option>
              <option value={"HIGH"}>High</option>
            </select>
            <select
              {...register("category")}
              className="modal_select"
              style={{ width: "45%" }}
            >
              <option value={"DEFAULT"}>Default</option>
            </select>
          </div>
          <div className="modal_row">
            <input
              {...register("date")}
              style={{ width: "75%" }}
              type="date"
              defaultValue={todayDate.toISOString().split("T")[0]}
            />
            <input
              {...register("time")}
              style={{ width: "25%" }}
              type="time"
              defaultValue={"12:00"}
            />
          </div>
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

export default AddTaskWindow;