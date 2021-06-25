import { useRef } from "react";
import { Marathon } from "../modal/data";
import { useAppDispatch } from "../store/hook";
import { listAction } from "../store/list-slice";

const MarathonExperience: React.FC = () => {
  const dispatch = useAppDispatch();

  const experience = useRef<HTMLInputElement>(null);
  const timing = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const savedData: Marathon = {
      experience: experience.current!.value,
      timing: timing.current!.value,
    };

    dispatch(listAction.addMarathon(savedData));
  };

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h3 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            ข้อมูลเกี่ยวกับการวิ่ง
          </button>
        </h3>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse show"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <form onSubmit={submitHandler}>
              <div>
                <label>ประวัติการลงแข่ง</label>
                <input type="text" ref={experience} />
              </div>
              <div>
                <label>
                  เวลาที่คาดว่าจะจบในการวิ่งครั้งนี้ (ชั่วโมงและนาที)
                </label>
                <input type="text" ref={timing} />
              </div>

              <div>
                <button>Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarathonExperience;
