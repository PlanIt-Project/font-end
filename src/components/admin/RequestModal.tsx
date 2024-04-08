import { requestApprove } from "../../hooks/queries/admin/requestApprove";
import { useAdminRequestDetailStore } from "../../stores/adminRequestStore";
import * as S from "../../styles/admin/AdminModal.styles";
import { IModal } from "../../types/admin/Admin.types";

export default function RequestModal({ setOnModal }: IModal) {
  const { requestDetail } = useAdminRequestDetailStore();
  const { mutate } = requestApprove(Number(requestDetail.id), Number(requestDetail.trainerId), setOnModal);


  const onClickApprove = () => {
    mutate();
  };
  const onClickClose = () => {
    setOnModal(false);
  };
  return (
    <S.Overlay>
      <S.LittleModal>
        <S.LittleModalTitle>등록 요청을 승인하시겠습니까?</S.LittleModalTitle>
        <S.ButtonContainer>
          <S.ModalButton onClick={onClickApprove}>승인</S.ModalButton>
          <S.CloseButton onClick={onClickClose}>취소</S.CloseButton>
        </S.ButtonContainer>
      </S.LittleModal>
    </S.Overlay>
  );
}
