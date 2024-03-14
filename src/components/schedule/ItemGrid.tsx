import styled from "styled-components";
import { IItemList } from "../../types/UserReservation.types";
import { breakPoints } from "../../styles/breakPoints";

interface IItemGridProps {
  item: IItemList;
  isSelected: boolean;
  onClickItem: (id: string) => void;
}

export default function ItemGrid({
  item,
  isSelected,
  onClickItem,
}: IItemGridProps) {
  return (
    <Container
      onClick={() => {
        onClickItem(item.id);
      }}
      $isSelected={isSelected}
    >
      <Title>{item.name}</Title>
      <Contents>
        {item.startDate} ~ {item.endDate}
      </Contents>
      <Contents>
        <span className="strong">90일 남음</span> <span> / </span>{" "}
        <span> 총 90일</span>
      </Contents>
      <Contents>{item.trainer}</Contents>
    </Container>
  );
}

const Container = styled.div<{ $isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 300px;
  height: 150px;
  padding: 10px;
  border: 1px solid var(--main-color-500);
  border-radius: 10px;
  background-color: ${(props) => props.$isSelected && "var(--main-color-300)"};
  cursor: pointer;

  @media screen and (max-width: ${breakPoints.small}px) {
    min-width: 260px;
    height: 130px;
  }
`;

const Title = styled.div`
  font-size: var(--font-size-400);
  font-weight: 700;

  @media screen and (max-width: ${breakPoints.small}px) {
    font-size: var(--font-size-500);
  }
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: var(--font-size-600);

  > span {
    &.strong {
      font-weight: 700;
    }
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    font-size: var(--font-size-700);
  }
`;
