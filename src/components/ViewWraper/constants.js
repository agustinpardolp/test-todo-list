export const statusTypes = {
  ARCHIVED: "ARCHIVED",
  DONE: "DONE",
  TODO: "TODO",
};

export const handleCheckStatus = (value) => {
  let checkStatus = {
    isChecked: false,
    isDisabled: false,
    nextStatus: "",
  };
  switch (value.status) {
    case statusTypes.ARCHIVED:
      checkStatus = {
        ...checkStatus,
        isChecked: true,
        isDisabled: true,
      };
      break;
    case statusTypes.DONE:
      checkStatus = {
        ...checkStatus,
        isChecked: true,
        nextStatus: statusTypes.TODO,
      };
      break;
    case statusTypes.TODO:
      checkStatus = {
        ...checkStatus,
        nextStatus: statusTypes.DONE,
      };
      break;
    default:
      break;
  }
  return checkStatus;
};

export const todoLabels = {
  buttonLabel: 'Archivar',
}