import { Notifier, LLM, Context } from "@klave/sdk/assembly";
import { JSON } from "@klave/sdk/assembly";
import { GraphLoadInput, GraphInitExecutionContextInput, InferenceAddPromptInput, ContextNameInput, InferenceComputeInput, InferenceOutput} from "./types";

/**
 * @transaction
 */
export function graphLoad(input: GraphLoadInput): void {
    let result = LLM.graphLoad(
        input.builder,
        input.encoding, 
        input.target);
    if (result.err) {
        Notifier.sendString(result.err!.message);
        return;
    }
    Notifier.sendString(result.data!);
}

/**
 * @query
 */
export function getModels(): void {
    let models = LLM.graphModels();
    if (models.err) {
        Notifier.sendString(models.err!.message);
        return;
    }
    Notifier.sendJson(models.data!);
}

/**
 * @query
 */
export function getTokenizers(): void {
    let tokenizers = LLM.graphTokenizers();
    if (tokenizers.err) {
        Notifier.sendString(tokenizers.err!.message);
        return;
    }
    Notifier.sendJson(tokenizers.data!);
}

/**
 * @query
 */
export function graphInitExecutionContext(input: GraphInitExecutionContextInput): void {
    input.context_name = Context.get('sender') + "-" + input.context_name;
    let result = LLM.graphInitExecutionContext(JSON.stringify<GraphInitExecutionContextInput>(input));
    if (result.err) {
        Notifier.sendString(result.err!.message);            
    }
    Notifier.sendString(input.context_name);
}

/**
 * @query
 */
export function graphDeleteExecutionContext(input: ContextNameInput): void {
    input.context_name = Context.get('sender') + "-" + input.context_name;
    let result = LLM.graphDeleteExecutionContext(input.context_name);
    if (result.err) {
        Notifier.sendString(result.err!.message);            
    }
    Notifier.sendString(result.data!);
}

/**
 * @query
 */
export function inferenceAddPrompt(input: InferenceAddPromptInput): void {
    input.context_name = Context.get('sender') + "-" + input.context_name;
    let result = LLM.inferenceAddPrompt(input.context_name, String.UTF8.encode(input.user_prompt, true));
    if (result.err) {
        Notifier.sendString(result.err!.message);            
    }
    Notifier.sendString(result.data!);
}

/**
 * @query
 */
export function inferenceGetPiece(input: ContextNameInput): void {
    input.context_name = Context.get('sender') + "-" + input.context_name;
    let result = LLM.inferenceGetPiece(input.context_name);
    if (result.err) {
        Notifier.sendString(result.err!.message);            
    }
    Notifier.sendString(result.data!);
}

/**
 * @query
 */
export function inferenceGetPieces(input: ContextNameInput): void {
    input.context_name = Context.get('sender') + "-" + input.context_name;

    let output : InferenceOutput = new InferenceOutput();
    output.piece = "";
    output.complete = false;
    do {
        let result = LLM.inferenceGetPiece(input.context_name);
        if (result.err) {
            Notifier.sendString("Failed to get piece: " + result.err!.message);        
            break;    
        }

        output = JSON.parse<InferenceOutput>(result.data!);
        if (output.piece.length > 0 || output.complete) {
            Notifier.sendString(result.data!);
        } 
    }
    while (!output.complete);
}

/**
 * @query
 */
export function inferenceCompute(input: InferenceComputeInput): void {
    input.context_name = Context.get('sender') + "-" + input.context_name;
    let result = LLM.inferenceCompute(input.context_name, String.UTF8.encode(input.input_tensor, true));
    if (result.err) {
        Notifier.sendString(result.err!.message);
    }
    Notifier.sendString(result.data!);
}

/**
 * @query
 */
export function inferenceStop(input: ContextNameInput): void {
    input.context_name = Context.get('sender') + "-" + input.context_name;
    let result = LLM.inferenceStop(input.context_name);
    if (result.err) {
        Notifier.sendString(result.err!.message);
    }
    Notifier.sendString(result.data!);
}

/**
 * @query
 */
export function graphDeleteAllExecutionContexts(_: string): void {
    let result = LLM.graphDeleteAllExecutionContexts();
    if (result.err) {
        Notifier.sendString(result.err!.message);
    }
    Notifier.sendString(result.data!);
}
