function calculateExpectedNewIndexOfFirstElementInView(
    numberOfRightClicks: number,
    viewportModifier: number
): number {
    return numberOfRightClicks * viewportModifier;
}

export function calculateExpectedNewIndexOfLastElementInView(
    numberOfRightClicks: number,
    viewportModifier: number
): number {
    return (
        calculateExpectedNewIndexOfFirstElementInView(
            numberOfRightClicks,
            viewportModifier
        ) +
        viewportModifier -
        1
    );
}

export function calculateNewLastElementInView(
    numberOfRightClicks: number,
    viewportModifier: number,
    totalNumberOfElements: number
): number {
    const expectedNewIndexOfLastElementInView = calculateExpectedNewIndexOfLastElementInView(
        numberOfRightClicks,
        viewportModifier
    );
    let newIndexOfLastElementInView: number;
    if (expectedNewIndexOfLastElementInView >= totalNumberOfElements) {
        newIndexOfLastElementInView = totalNumberOfElements - 1;
    } else if (expectedNewIndexOfLastElementInView <= 0) {
        newIndexOfLastElementInView = 0;
    } else {
        newIndexOfLastElementInView = expectedNewIndexOfLastElementInView;
    }
    return newIndexOfLastElementInView;
}

export function calculateNewFirstElementInView(
    numberOfRightClicks: number,
    viewportModifier: number,
    totalNumberOfElements: number
): number {
    const expectedNewIndexOfFirstElementInView = calculateExpectedNewIndexOfFirstElementInView(
        numberOfRightClicks,
        viewportModifier
    );
    let newIndexOfFirstElementInView: number;
    if (expectedNewIndexOfFirstElementInView < 0) {
        newIndexOfFirstElementInView = 0;
    } else if (expectedNewIndexOfFirstElementInView >= totalNumberOfElements) {
        newIndexOfFirstElementInView = totalNumberOfElements - 1;
    } else {
        newIndexOfFirstElementInView = expectedNewIndexOfFirstElementInView;
    }
    return newIndexOfFirstElementInView;
}
