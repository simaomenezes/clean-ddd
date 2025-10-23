import { Answer } from "../entidade/answer";

interface AnswerQuestionUseCaseRequest {
    instructorId: string;
    questionId: string;
    content: string;
}

export class AnswerQuestionUseCase {
    async execute({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest) {
        const answer = new Answer(content)

        return answer;
    }

}