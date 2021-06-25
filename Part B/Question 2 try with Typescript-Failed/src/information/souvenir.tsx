import { useRef } from "react";
import { Sourvenir } from "../modal/data";
import { useAppDispatch } from "../store/hook";
import { listAction } from "../store/list-slice";

const Souvenir: React.FC = () => {
  const dispatch = useAppDispatch();

  const size = useRef<HTMLSelectElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const savedData: Sourvenir = {
      size: size.current!.value,
    };

    dispatch(listAction.addSourvenir(savedData));
  };

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h3 className="accordion-header" id="headingFive">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="true"
            aria-controls="collapseFive"
          >
            เสื้อของที่ระลึก
          </button>
        </h3>
        <div
          id="collapseFive"
          className="accordion-collapse collapse show"
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <form onSubmit={submitHandler}>
              <div>
                <label>ไซส์เสื้อ</label>
                <select ref={size}>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                  <option>XXXL</option>
                  <option>อื่นๆ</option>
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

export default Souvenir;