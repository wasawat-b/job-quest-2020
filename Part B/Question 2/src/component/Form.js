import PersonalForm from "../information/personal";
import MarathonExperience from "../information/marathon";
import EmergencyContact from "../information/emergency";
import HealthDetail from "../information/health";
import Souvenir from "../information/sourvenir";
import { useDispatch, useSelector } from "react-redux";
import { listAction } from "../store/list-slice";
import { useState } from "react";

const InputForm = () => {
  const dispatch = useDispatch();
  const personalIsValid = useSelector((state) => state.data.personalValid);
  const marathonIsValid = useSelector((state) => state.data.marathonValid);
  const emergencyIsValid = useSelector((state) => state.data.emergencyValid);
  const healthIsValid = useSelector((state) => state.data.healthValid);
  const sourveniIsValid = useSelector((state) => state.data.sourvenirValid);

  const [gatheringData, setGatheringData] = useState();

  let personal;
  const personalHandler = (data) => {
    personal = data;
  };

  let marathon;
  const marathonHandler = (data) => {
    marathon = data;
  };

  let emergency;
  const emergencyHandler = (data) => {
    emergency = data;
  };

  let health;
  const healthHandler = (data) => {
    health = data;
  };

  let sourvenir;
  const sourvenirHandler = (data) => {
    sourvenir = data;
  };
  let formIsValid = false;
  if (
    personalIsValid &&
    marathonIsValid &&
    emergencyIsValid &&
    healthIsValid &&
    sourveniIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const newId = { id: new Date().toISOString() };

    setGatheringData({
      ...newId,
      ...personal,
      ...marathon,
      ...emergency,
      ...health,
      ...sourvenir,
    });

    dispatch(listAction.addData(gatheringData));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="accordion" id="accordionExample">
          <PersonalForm onSentPersonal={personalHandler} />
          <MarathonExperience onSentMarathon={marathonHandler} />
          <EmergencyContact onSentEmergency={emergencyHandler} />
          <HealthDetail onSentHealth={healthHandler} />
          <Souvenir onSentSourvenir={sourvenirHandler} />
        </div>
        <div>
          <button
            className="btn btn-success m-2"
            type="submit"
          >
            Save Draft
          </button>
          <button
            className="btn btn-success m-2"
            type="submit"
            disabled={!formIsValid}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
