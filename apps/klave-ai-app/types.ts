// Copyright 2025 Secretarium Ltd <contact@secretarium.org>
@json
export class GraphLoadInput {
    builder!: string; 
    encoding!: i32; 
    target!: i32;
}

@json 
export class GraphInitExecutionContextInput {
    model_name!: string;
    context_name!: string;
    mode!: string;
    system_prompt!: string;
    temperature!: number;
    topp!: number;
    steps!: i32;  
    sliding_window!: boolean;
}

@json 
export class InferenceAddPromptInput {
    context_name!: string;
    user_prompt!: string;
}

@json 
export class ContextNameInput {
    context_name!: string;
}

@json
export class InferenceOutput {
    piece!: string; 
    complete!: boolean;
}

@json 
export class InferenceComputeInput {
    context_name!: string;
    input_tensor!: string;
}
