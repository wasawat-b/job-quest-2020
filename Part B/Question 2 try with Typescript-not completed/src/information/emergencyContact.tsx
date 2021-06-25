import { useRef } from "react";
import { Emergency } from "../modal/data";
import { useAppDispatch } from "../store/hook";
import { listAction } from "../store/list-slice";

const EmergencyContact: React.FC = () => {
  const dispatch = useAppDispatch();

  const firstPatientName = useRef<HTMLInputElement>(null);
  const firstPatientRelationship = useRef<HTMLInputElement>(null);
  const firstPatientPhone = useRef<HTMLInputElement>(null);
  const secondPatientName = useRef<HTMLInputElement>(null);
  const secondPatientRelationship = useRef<HTMLInputElement>(null);
  const secondPatientPhone = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const savedData: Emergency = {
      firstPatientName: firstPatientName.current!.value,
      firstPatientRelationship: firstPatientRelationship.current!.value,
      firstPatientPhone: firstPatientPhone.current!.value,
      secondPatientName: secondPatientName.current!.value,
      secondPatientRelationship: secondPatientRelationship.current!.value,
      secondPatientPhone: secondPatientPhone.current!.value,
    };

    dispatch(listAction.addEmergency(savedData));
  };

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h3 className="accordion-header" id="headingThree">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="true"
            aria-controls="collapseThree"
          >
            ผู้ติดต่อฉุกเฉิน
          </button>
        </h3>
        <div
          id="collapseThree"
          className="accordion-collapse collapse show"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <form onSubmit={submitHandler}>
              <div>
                <label>ชื่อ-นามสกุล</label>
                <input type="text" ref={firstPatientName} />
              </div>
              <div>
                <label>ความสัมพันธ์</label>
                <input type="text" ref={firstPatientRelationship} />
              </div>
              <div>
                <label>เบอร์โทรศัพท์</label>
                <input type="text" ref={firstPatientPhone} />
              </div>
              <h5>ผู้ติดต่อฉุกเฉินคนที่ 2</h5>
              <div>
                <label>ชื่อ-นามสกุล</label>
                <input type="text" ref={secondPatientName} />
              </div>
              <div>
                <label>ความสัมพันธ์</label>
                <input type="text" ref={secondPatientRelationship} />
              </div>
              <div>
                <label>เบอร์โทรศัพท์</label>
                <input type="text" ref={secondPatientPhone} />
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

export default EmergencyContact;