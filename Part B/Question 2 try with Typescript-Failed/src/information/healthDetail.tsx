import { useRef } from "react";
import { Health } from "../modal/data";
import { useAppDispatch } from "../store/hook";
import { listAction } from "../store/list-slice";

const HealthDetail: React.FC = () => {
  const dispatch = useAppDispatch();

  const bloodType = useRef<HTMLSelectElement>(null);
  const allergy = useRef<HTMLSelectElement>(null);
  const allergyDetail = useRef<HTMLInputElement>(null);
  const disease = useRef<HTMLSelectElement>(null);
  const diseaseDetail = useRef<HTMLInputElement>(null);
  const surgery = useRef<HTMLSelectElement>(null);
  const surgeryPosition = useRef<HTMLInputElement>(null);
  const surgeryWhen = useRef<HTMLInputElement>(null);
  const child = useRef<HTMLSelectElement>(null);
  const medicine = useRef<HTMLSelectElement>(null);
  const medicineDetail = useRef<HTMLInputElement>(null);
  const accident = useRef<HTMLSelectElement>(null);
  const exercise = useRef<HTMLSelectElement>(null);
  const abnormal = useRef<HTMLSelectElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const savedData: Health = {
      bloodType: bloodType.current!.value,
      allergy: allergy.current!.value,
      allergyDetail: allergyDetail.current!.value,
      disease: disease.current!.value,
      diseaseDetail: diseaseDetail.current!.value,
      surgery: surgery.current!.value,
      surgeryPosition: surgeryPosition.current!.value,
      surgeryWhen: surgeryWhen.current!.value,
      child: child.current!.value,
      medicine: medicine.current!.value,
      medicineDetail: medicineDetail.current!.value,
      accident: accident.current!.value,
      exercise: exercise.current!.value,
      abnormal: abnormal.current!.value,
    };

    dispatch(listAction.addHealth(savedData));
  };

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h3 className="accordion-header" id="headingFour">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="true"
            aria-controls="collapseFour"
          >
            ข้อมูลทางการแพทย์
          </button>
        </h3>
        <div
          id="collapseFour"
          className="accordion-collapse collapse show"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <form onSubmit={submitHandler}>
              <div>
                <label>หมู่เลือด</label>
                <select ref={bloodType}>
                  <option>A</option>
                  <option>B</option>
                  <option>O</option>
                  <option>AB</option>
                </select>
              </div>
              <div>
                <label>ท่านมีอาการแพ้ยาหรือสารต่างๆ หรือไม่</label>
                <select ref={allergy}>
                  <option>ไม่มี</option>
                  <option>มี</option>
                </select>
              </div>
              <div>
                <label>ท่านมีโรคประจำตัว หรือไม่</label>
                <select ref={disease}>
                  <option>ไม่มี</option>
                  <option>มี</option>
                </select>
              </div>
              <div>
                <label>ท่านมีประวัติการผ่าตัด มาก่อนหรือไม่</label>
                <select ref={surgery}>
                  <option>ไม่มี</option>
                  <option>มี</option>
                </select>
              </div>
              <div>
                <label>
                  ท่านมีแพลนที่จะมีบุตร หรือ
                  กำลังตั้งครรภ์ก่อนถึงช่วงการแข่งขันหรือไม่
                </label>
                <select ref={child}>
                  <option>ไม่มี</option>
                  <option>มี</option>
                </select>
              </div>
              <div>
                <label>ท่านมียาที่ต้องทานเป็นประจำหรือไม่</label>
                <select ref={medicine}>
                  <option>ไม่มี</option>
                  <option>มี</option>
                </select>
              </div>
              <div>
                <label>
                  ท่านเคยบาดเจ็บ/ เจ็บป่วย จากการเข้าร่วมงานวิ่ง
                  ที่ต้องไปรักษาต่อที่โรงพยาบาลหรือ
                </label>
                <select ref={accident}>
                  <option>ไม่มี</option>
                  <option>มี</option>
                </select>
              </div>
              <div>
                <label>
                  ท่านออกกำลังกายสม่ำเสมอหรือไม่ (อย่างน้อย 1-2 ครั้ง
                  ต่อสัปดาห์)
                </label>
                <select ref={exercise}>
                  <option>ไม่มี</option>
                  <option>มี</option>
                </select>
              </div>
              <div>
                <label>
                  ท่านเคยมีอาการเจ็บแน่นหน้าอก ใจสั่น เหนื่อยง่ายผิดปกติ หน้ามืด
                  ขณะออกกำลังกาย
                </label>
                <select ref={abnormal}>
                  <option>ไม่มี</option>
                  <option>มี</option>
                </select>
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

export default HealthDetail;
