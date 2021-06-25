import { useRef } from "react";
import { Personal } from "../modal/data";
import { useAppDispatch } from "../store/hook";
import { listAction } from "../store/list-slice";

const PersonalForm: React.FC<{sendData: void}> = (props) => {
  const dispatch = useAppDispatch();

  const nameTitle = useRef<HTMLSelectElement>(null);
  const firstNameTh = useRef<HTMLInputElement>(null);
  const firstNameEng = useRef<HTMLInputElement>(null);
  const lastastNameTh = useRef<HTMLInputElement>(null);
  const lastastNameEng = useRef<HTMLInputElement>(null);
  const birthDate = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const personalId = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLTextAreaElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const picture = useRef<HTMLInputElement>(null);
  const runningName = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const savedData: Personal = {
      nameTitle: nameTitle.current!.value,
      firstNameTh: firstNameTh.current!.value,
      firstNameEng: firstNameEng.current!.value,
      lastNameTh: lastastNameTh.current!.value,
      lastNameEng: lastastNameEng.current!.value,
      birthDate: birthDate.current!.value,
      email: email.current!.value,
      personalId: parseInt(personalId.current!.value),
      address: address.current!.value,
      phone: parseInt(phone.current!.value),
      picture: picture.current!.value,
      runningName: runningName.current!.value,
    };

    props.sendData(savedData);

    dispatch(listAction.addPersonal(savedData));
  };

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h3 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            ข้อมูลส่วนตัว
          </button>
        </h3>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <form onSubmit={submitHandler}>
              <div>
                <label>คำนำหน้าชื่อ</label>
                <select ref={nameTitle}>
                  <option>นาย</option>
                  <option>นาง</option>
                  <option>นางสาว</option>
                  <option>อื่นๆ</option>
                </select>
              </div>
              <div>
                <label>ชื่อ</label>
                <input type="text" ref={firstNameTh} placeholder="ภาษาไทย" />
                <input type="text" ref={firstNameEng} placeholder="English" />
              </div>
              <div>
                <label>นามสกุล</label>
                <input type="text" ref={lastastNameTh} placeholder="ภาษาไทย" />
                <input type="text" ref={lastastNameEng} placeholder="English" />
              </div>
              <div>
                <label>วันเดือนปีเกิด</label>
                <input type="date" ref={birthDate} />
              </div>
              <div>
                <label>อีเมล</label>
                <input type="email" ref={email} />
              </div>
              <div>
                <label>เลขบัตรประจำตัวประชาชน</label>
                <input type="string" ref={personalId} />
              </div>
              <div>
                <label>ที่อยู่</label>
                <textarea ref={address}></textarea>
              </div>
              <div>
                <label>เบอร์โทรศัพท์</label>
                <input type="text" ref={phone} />
              </div>
              <div>
                <label>รูปถ่ายหน้าตรง</label>
                <input type="File" ref={picture} />
              </div>
              <div>
                <label>ชื่อบนเบอร์วิ่ง (BIB)</label>
                <input type="text" ref={runningName} />
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

export default PersonalForm;
