import { render, screen } from '@testing-library/react';
import Timer from "./Timer";

test('초 표시', () => {
    Date.now = jest.fn(() => 123456789); // 시간에 따라 바뀔 수 있는 값들은 테스트 전 mock함수를 이용해서 고정된 값으로 바꾸면 됨

    const el = render(<Timer />);
    expect(el).toMatchSnapshot();
});